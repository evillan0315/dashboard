// pages/projects/new.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import ProjectType from "../../types/projects";
import { ToastContainer, toast } from "react-toastify"; // Optional for notifications
import "react-toastify/dist/ReactToastify.css";

const CreateProjectPage = () => {
  const [formData, setFormData] = useState<ProjectType>({
    id: 0,
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    url: "",
    frontend: { id: 0, technologies: [], features: [] },
    backend: { id: 0, technologies: [], features: [] },
    database: { id: 0, technologies: [], features: [] },
    api: { id: 0, technologies: [], features: [] },
    deployment: { id: 0, technologies: [], features: [] },
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/projects`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(formData, "formData");
      const newProject = await res.json();
      if (res.status === 201) {
        toast.success("Project created successfully!");
        router.push("/projects"); // Redirect after success
      } else {
        toast.error(newProject.error || "Failed to create project");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" className="my-8">
      <Typography variant="h4" className="mb-4">
        Create New Project
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          label="Start Date"
          type="date"
          name="startDate"
          value={formData.startDate.toISOString().split("T")[0]} // Format for display
          onChange={(e) => {
            const dateValue = new Date(e.target.value); // Convert string to Date
            setFormData({ ...formData, startDate: dateValue }); // Update formData
          }}
          fullWidth
          variant="outlined"
        />

        <TextField
          label="End Date"
          type="date"
          name="endDate"
          value={formData.endDate.toISOString().split("T")[0]} // Format for display
          onChange={(e) => {
            const dateValue = new Date(e.target.value); // Convert string to Date
            setFormData({ ...formData, endDate: dateValue }); // Update formData
          }}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
        <Box className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Project"}
          </Button>
        </Box>
      </form>
      <ToastContainer />
    </Container>
  );
};
CreateProjectPage.requireAuth = true;
export default CreateProjectPage;
