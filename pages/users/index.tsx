import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../../types/models";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [open, setOpen] = useState<boolean>(false);
  const [openInsert, setOpenInsert] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<User>({} as User);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUser = async (id: string) => {
    try {
      const response = await axios.get("/api/users/" + id);
      console.log(response.data);
      setSelectedUser(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleOpen = (user: User) => {
    fetchUser(user.id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedUser({} as User);
  };

  const handleOpenInsert = () => {
    setOpenInsert(true);
  };

  const handleCloseInsert = () => {
    setOpenInsert(false);
    setNewUser({} as User);
  };

  const handleInsertUser = async () => {
    try {
      await axios.post("/api/users", newUser);
      fetchUsers();
      handleCloseInsert();
    } catch (error) {
      console.error("Error inserting user:", error);
    }
  };

  return (
    <>
      <div>
        <Button variant="contained" color="primary" onClick={handleOpenInsert}>
          Add User
        </Button>
      </div>
      <Container maxWidth={false}>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {users.map((user: User) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://source.unsplash.com/random"
                />
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {user.email}
                  </Typography>
                  <IconButton onClick={() => handleOpen(user)}></IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>User Details</DialogTitle>
          <DialogContent>
            {selectedUser && (
              <>
                <Typography variant="h6">{selectedUser.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedUser.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedUser.country_of_residence}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedUser.phone_number}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedUser.address}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedUser.gender}
                </Typography>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openInsert} onClose={handleCloseInsert}>
          <DialogTitle>Add New User</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={newUser.name || ""}
              onChange={(e: { target: { value: any } }) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={newUser.email || ""}
              onChange={(e: { target: { value: any } }) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <TextField
              label="Country of Residence"
              fullWidth
              margin="normal"
              value={newUser.country_of_residence || ""}
              onChange={(e: { target: { value: any } }) =>
                setNewUser({ ...newUser, country_of_residence: e.target.value })
              }
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              value={newUser.phone_number || ""}
              onChange={(e: { target: { value: any } }) =>
                setNewUser({ ...newUser, phone_number: e.target.value })
              }
            />
            <TextField
              label="Address"
              fullWidth
              margin="normal"
              value={newUser.address || ""}
              onChange={(e: { target: { value: any } }) =>
                setNewUser({ ...newUser, address: e.target.value })
              }
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                value={newUser.gender || ""}
                onChange={(e: SelectChangeEvent) =>
                  setNewUser({ ...newUser, gender: e.target.value })
                }
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseInsert} color="primary">
              Cancel
            </Button>
            <Button onClick={handleInsertUser} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default UsersPage;
