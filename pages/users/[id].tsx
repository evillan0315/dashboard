import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { User } from "../../types/models";
import {
  SelectChangeEvent,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const UserPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formValues, setFormValues] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      setFormValues(response.data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
      fetchUser();
  });

  

  const handleInputChange = (
    e:
      | React.ChangeEvent<
          | HTMLInputElement
          | HTMLTextAreaElement
          | { name?: string; value: unknown }
        >
      | SelectChangeEvent<string | null>
  ) => {
    const { name, value } = e.target as
      | HTMLInputElement
      | { name: string; value: string | null };
    if (formValues && name) {
      setFormValues({ ...formValues, [name]: value ?? "" });
    }
  };

  const handleUpdateUser = async () => {
    if (formValues) {
      await axios.put(`/api/users/${id}`, formValues);
      router.push("/users");
    }
  };

  const handleDeleteUser = async () => {
    await axios.delete(`/api/users/${id}`);
    router.push("/users");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!formValues) {
    return <div>User not found</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Update User
      </Typography>
      <form onSubmit={handleUpdateUser}>
        <TextField
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Creation date"
          name="account_creation_date"
          value={formValues.account_creation_date.toISOString().split("T")[0]}
          onChange={handleInputChange}
          fullWidth
          required
          disabled
        />
        <TextField
          label="Country"
          name="country_of_residence"
          value={formValues.country_of_residence}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Phone number"
          name="phone_number"
          value={formValues.phone_number}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formValues.address}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteUser}
        >
          Delete
        </Button>
      </form>
    </Container>
  );
};

export default UserPage;
