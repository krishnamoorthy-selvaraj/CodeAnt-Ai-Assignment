import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RepositoryItem from "./RepositoryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";


const App = () => {
  const [repositories, setRepositories] = useState([
    { name: "design-system", type: "Public", tech: "React", size: "7320 KB", updated: "1 day ago" },
    { name: "codeant-ci-app", type: "Private", tech: "JavaScript", size: "5871 KB", updated: "2 days ago" },
    { name: "analytics-dashboard", type: "Private", tech: "Python", size: "4521 KB", updated: "5 days ago" },
    { name: "mobile-app", type: "Public", tech: "Swift", size: "3096 KB", updated: "3 days ago" },
    { name: "e-commerce-platform", type: "Private", tech: "Java", size: "6210 KB", updated: "6 days ago" },
    { name: "blog-website", type: "Public", tech: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
    { name: "social-network", type: "Private", tech: "PHP", size: "5432 KB", updated: "7 days ago" },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newRepo, setNewRepo] = useState({
    name: "",
    type: "Public",
    tech: "",
    size: "",
    updated: "just now",
  });

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRepo({ ...newRepo, [name]: value });
  };

  const handleAddRepository = (e) => {
    e.preventDefault();
    setRepositories([...repositories, newRepo]);
    setNewRepo({ name: "", type: "Public", tech: "", size: "", updated: "just now" });
    handleModalClose();
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchValue)
  );

  return (
    <div className="d-flex flex-column flex-lg-row vh-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-3 ">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-2">
          <h4 className="mb-2 mb-md-0">Repositories</h4>
          <Button variant="primary" onClick={handleModalShow} className="mt-2 mt-md-0">
            + Add Repository
          </Button>
        </div>
        <p className="text-muted">{repositories.length} total repositories</p>

        {/* Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Repositories"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>

        {/* Repository List */}
        <div className="list-group">
          {filteredRepositories.map((repo, index) => (
            <RepositoryItem
              key={index}
              name={repo.name}
              type={repo.type}
              tech={repo.tech}
              size={repo.size}
              updated={repo.updated}
            />
          ))}
        </div>

        {/* Add Repository Modal */}
        <Modal show={showModal} onHide={handleModalClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Repository</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddRepository}>
              <Form.Group className="mb-3">
                <Form.Label>Repository Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={newRepo.name}
                  onChange={handleInputChange}
                  placeholder="Enter repository name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  name="type"
                  value={newRepo.type}
                  onChange={handleInputChange}
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Technology</Form.Label>
                <Form.Control
                  type="text"
                  name="tech"
                  value={newRepo.tech}
                  onChange={handleInputChange}
                  placeholder="Enter technology (e.g., React, Python)"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  name="size"
                  value={newRepo.size}
                  onChange={handleInputChange}
                  placeholder="Enter size (e.g., 1234 KB)"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Repository
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default App;
