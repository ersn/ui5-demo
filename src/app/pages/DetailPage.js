"use client";

import { useState } from "react";
import WizardComponent from "../components/WizardComponent";

export default function DetailPage({ currentMenuItem }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [columnFilters, setColumnFilters] = useState({
    name: "",
    position: "",
    department: "",
    email: "",
    phone: "",
    status: ""
  });
  const [activeFilter, setActiveFilter] = useState(null);
  const renderContent = () => {
    if (!currentMenuItem) return <div>Content not found</div>;

    const { content } = currentMenuItem;

    if (content.type === "wizard") {
      return <WizardComponent wizardData={content.wizardData} />;
    }

    if (content.type === "cards") {
      return (
        <div style={{ padding: "1rem" }}>
          <ui5-title level="H2">{content.title}</ui5-title>
          <div style={{
            marginTop: "1rem",
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
          }}>
            {content.cards?.map((card, index) => (
              <ui5-card key={index}>
                <ui5-card-header
                  slot="header"
                  title-text={card.title}
                  subtitle-text={card.subtitle}
                ></ui5-card-header>
                <div style={{ padding: "1rem" }}>
                  <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{card.value}</div>
                </div>
              </ui5-card>
            ))}
          </div>
        </div>
      );
    }

    if (content.type === "list") {
      // Card view for Orders page
      if (currentMenuItem.key === "orders") {
        return (
          <div style={{ padding: "1rem" }}>
            <ui5-title level="H2">{content.title}</ui5-title>
            <div style={{
              marginTop: "1rem",
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))"
            }}>
              {content.items?.map((item, index) => (
                <ui5-card key={index}>
                  <ui5-card-header
                    slot="header"
                    title-text={item.title}
                    subtitle-text={`Status: ${item.description}`}
                    status={item.status}
                  ></ui5-card-header>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem"
                    }}>
                      <ui5-label>Total Amount:</ui5-label>
                      <span style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#0854a0"
                      }}>{item.additionalText}</span>
                    </div>
                    <ui5-badge
                      color-scheme={
                        item.status === "success" ? "8" :
                        item.status === "warning" ? "1" :
                        item.status === "error" ? "2" : "7"
                      }
                    >
                      {item.description}
                    </ui5-badge>
                  </div>
                </ui5-card>
              ))}
            </div>
          </div>
        );
      }

      // Card view with table for Products page
      if (currentMenuItem.key === "products") {
        // Dummy people data
        const peopleData = [
          { id: 1, name: "John Smith", position: "Product Manager", department: "Marketing", email: "j.smith@company.com", phone: "+1-555-0123", status: "Active" },
          { id: 2, name: "Sarah Johnson", position: "Senior Developer", department: "Engineering", email: "s.johnson@company.com", phone: "+1-555-0124", status: "Active" },
          { id: 3, name: "Michael Brown", position: "UX Designer", department: "Design", email: "m.brown@company.com", phone: "+1-555-0125", status: "On Leave" },
          { id: 4, name: "Emily Davis", position: "Sales Executive", department: "Sales", email: "e.davis@company.com", phone: "+1-555-0126", status: "Active" },
          { id: 5, name: "David Wilson", position: "DevOps Engineer", department: "Engineering", email: "d.wilson@company.com", phone: "+1-555-0127", status: "Active" },
          { id: 6, name: "Lisa Anderson", position: "HR Manager", department: "Human Resources", email: "l.anderson@company.com", phone: "+1-555-0128", status: "Active" },
          { id: 7, name: "Robert Martinez", position: "Financial Analyst", department: "Finance", email: "r.martinez@company.com", phone: "+1-555-0129", status: "Remote" },
          { id: 8, name: "Jennifer Taylor", position: "Marketing Specialist", department: "Marketing", email: "j.taylor@company.com", phone: "+1-555-0130", status: "Active" },
          { id: 9, name: "William Lee", position: "Backend Developer", department: "Engineering", email: "w.lee@company.com", phone: "+1-555-0131", status: "Active" },
          { id: 10, name: "Amanda White", position: "Project Manager", department: "Operations", email: "a.white@company.com", phone: "+1-555-0132", status: "Active" }
        ];

        // Filter people based on search term and column filters
        const filteredPeople = peopleData.filter(person => {
          // Global search filter
          const matchesGlobalSearch = !searchTerm ||
            person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.email.toLowerCase().includes(searchTerm.toLowerCase());

          // Column-specific filters
          const matchesNameFilter = !columnFilters.name ||
            person.name.toLowerCase().includes(columnFilters.name.toLowerCase());
          const matchesPositionFilter = !columnFilters.position ||
            person.position.toLowerCase().includes(columnFilters.position.toLowerCase());
          const matchesDepartmentFilter = !columnFilters.department ||
            person.department.toLowerCase().includes(columnFilters.department.toLowerCase());
          const matchesEmailFilter = !columnFilters.email ||
            person.email.toLowerCase().includes(columnFilters.email.toLowerCase());
          const matchesPhoneFilter = !columnFilters.phone ||
            person.phone.toLowerCase().includes(columnFilters.phone.toLowerCase());
          const matchesStatusFilter = !columnFilters.status ||
            person.status.toLowerCase().includes(columnFilters.status.toLowerCase());

          return matchesGlobalSearch &&
                 matchesNameFilter &&
                 matchesPositionFilter &&
                 matchesDepartmentFilter &&
                 matchesEmailFilter &&
                 matchesPhoneFilter &&
                 matchesStatusFilter;
        });

        return (
          <div style={{ padding: "1rem" }}>
            <ui5-title level="H2">{content.title}</ui5-title>

            {/* Product cards */}
            <div style={{
              marginTop: "1rem",
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
            }}>
              {content.items?.map((item, index) => (
                <ui5-card key={index}>
                  <ui5-card-header
                    slot="header"
                    title-text={item.title}
                  ></ui5-card-header>
                  <div style={{ padding: "1.5rem" }}>
                    <p style={{ marginBottom: "1rem", color: "#666" }}>
                      {item.description}
                    </p>
                    <div style={{
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                      color: "#0854a0"
                    }}>
                      {item.price}
                    </div>
                    <ui5-button
                      design="Emphasized"
                      style={{ marginTop: "1rem", width: "100%" }}
                    >
                      View Details
                    </ui5-button>
                  </div>
                </ui5-card>
              ))}
            </div>

            {/* People table section */}
            <div style={{ marginTop: "3rem" }}>
              <ui5-title level="H3">Team Members</ui5-title>

              {/* Search bar */}
              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <ui5-input
                  placeholder="Search by name, position, department, or email..."
                  style={{ width: "100%", maxWidth: "400px" }}
                  onInput={(e) => setSearchTerm(e.target.value)}
                >
                  <ui5-icon name="search" slot="icon"></ui5-icon>
                </ui5-input>
              </div>

              {/* Column Filters */}
              <div style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "0.5rem",
                padding: "1rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #e0e0e0"
              }}>
                <div>
                  <ui5-label style={{ fontSize: "0.8rem", marginBottom: "0.25rem", display: "block" }}>Filter by Name:</ui5-label>
                  <ui5-input
                    placeholder="Search names..."
                    style={{ width: "100%" }}
                    value={columnFilters.name}
                    onInput={(e) => setColumnFilters({ ...columnFilters, name: e.target.value })}
                  ></ui5-input>
                </div>
                <div>
                  <ui5-label style={{ fontSize: "0.8rem", marginBottom: "0.25rem", display: "block" }}>Filter by Position:</ui5-label>
                  <ui5-input
                    placeholder="Search positions..."
                    style={{ width: "100%" }}
                    value={columnFilters.position}
                    onInput={(e) => setColumnFilters({ ...columnFilters, position: e.target.value })}
                  ></ui5-input>
                </div>
                <div>
                  <ui5-label style={{ fontSize: "0.8rem", marginBottom: "0.25rem", display: "block" }}>Filter by Department:</ui5-label>
                  <ui5-input
                    placeholder="Search departments..."
                    style={{ width: "100%" }}
                    value={columnFilters.department}
                    onInput={(e) => setColumnFilters({ ...columnFilters, department: e.target.value })}
                  ></ui5-input>
                </div>
                <div>
                  <ui5-label style={{ fontSize: "0.8rem", marginBottom: "0.25rem", display: "block" }}>Filter by Email:</ui5-label>
                  <ui5-input
                    placeholder="Search emails..."
                    style={{ width: "100%" }}
                    value={columnFilters.email}
                    onInput={(e) => setColumnFilters({ ...columnFilters, email: e.target.value })}
                  ></ui5-input>
                </div>
                <div>
                  <ui5-label style={{ fontSize: "0.8rem", marginBottom: "0.25rem", display: "block" }}>Filter by Phone:</ui5-label>
                  <ui5-input
                    placeholder="Search phones..."
                    style={{ width: "100%" }}
                    value={columnFilters.phone}
                    onInput={(e) => setColumnFilters({ ...columnFilters, phone: e.target.value })}
                  ></ui5-input>
                </div>
                <div>
                  <ui5-label style={{ fontSize: "0.8rem", marginBottom: "0.25rem", display: "block" }}>Filter by Status:</ui5-label>
                  <ui5-select
                    style={{ width: "100%" }}
                    onChange={(e) => setColumnFilters({ ...columnFilters, status: e.detail.selectedOption.textContent === "All" ? "" : e.detail.selectedOption.textContent })}
                  >
                    <ui5-option>All</ui5-option>
                    <ui5-option>Active</ui5-option>
                    <ui5-option>Remote</ui5-option>
                    <ui5-option>On Leave</ui5-option>
                  </ui5-select>
                </div>
              </div>

              {/* Clear Filters Button */}
              <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <ui5-button
                  design="Transparent"
                  icon="clear-filter"
                  onClick={() => {
                    setColumnFilters({
                      name: "",
                      position: "",
                      department: "",
                      email: "",
                      phone: "",
                      status: ""
                    });
                    setSearchTerm("");
                  }}
                >
                  Clear All Filters
                </ui5-button>
                <ui5-label style={{ color: "#666", fontSize: "0.9rem" }}>
                  Showing {filteredPeople.length} of {peopleData.length} results
                </ui5-label>
              </div>

              {/* UI5 Table */}
              <ui5-table style={{ marginTop: "1rem" }}>
                <ui5-table-header-row slot="headerRow">
                  <ui5-table-header-cell style={{ width: "12rem", position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "4px"
                      }}
                      onClick={() => setActiveFilter(activeFilter === "name" ? null : "name")}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <ui5-label>Name</ui5-label>
                      <ui5-icon
                        name={columnFilters.name ? "filter" : "slim-arrow-down"}
                        style={{
                          fontSize: "0.8rem",
                          color: columnFilters.name ? "#0854a0" : "#666",
                          marginLeft: "0.5rem"
                        }}
                      ></ui5-icon>
                    </div>
                    {activeFilter === "name" && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 1000,
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: "200px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}>
                        <ui5-label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                          Filter by Name:
                        </ui5-label>
                        <ui5-input
                          placeholder="Enter name..."
                          style={{ width: "100%", marginBottom: "0.5rem" }}
                          value={columnFilters.name}
                          onInput={(e) => setColumnFilters({ ...columnFilters, name: e.target.value })}
                        ></ui5-input>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <ui5-button
                            design="Transparent"
                            onClick={() => {
                              setColumnFilters({ ...columnFilters, name: "" });
                              setActiveFilter(null);
                            }}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Clear
                          </ui5-button>
                          <ui5-button
                            design="Emphasized"
                            onClick={() => setActiveFilter(null)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Apply
                          </ui5-button>
                        </div>
                      </div>
                    )}
                  </ui5-table-header-cell>

                  <ui5-table-header-cell style={{ position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "4px"
                      }}
                      onClick={() => setActiveFilter(activeFilter === "position" ? null : "position")}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <ui5-label>Position</ui5-label>
                      <ui5-icon
                        name={columnFilters.position ? "filter" : "slim-arrow-down"}
                        style={{
                          fontSize: "0.8rem",
                          color: columnFilters.position ? "#0854a0" : "#666",
                          marginLeft: "0.5rem"
                        }}
                      ></ui5-icon>
                    </div>
                    {activeFilter === "position" && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 1000,
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: "200px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}>
                        <ui5-label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                          Filter by Position:
                        </ui5-label>
                        <ui5-input
                          placeholder="Enter position..."
                          style={{ width: "100%", marginBottom: "0.5rem" }}
                          value={columnFilters.position}
                          onInput={(e) => setColumnFilters({ ...columnFilters, position: e.target.value })}
                        ></ui5-input>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <ui5-button
                            design="Transparent"
                            onClick={() => {
                              setColumnFilters({ ...columnFilters, position: "" });
                              setActiveFilter(null);
                            }}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Clear
                          </ui5-button>
                          <ui5-button
                            design="Emphasized"
                            onClick={() => setActiveFilter(null)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Apply
                          </ui5-button>
                        </div>
                      </div>
                    )}
                  </ui5-table-header-cell>

                  <ui5-table-header-cell style={{ position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "4px"
                      }}
                      onClick={() => setActiveFilter(activeFilter === "department" ? null : "department")}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <ui5-label>Department</ui5-label>
                      <ui5-icon
                        name={columnFilters.department ? "filter" : "slim-arrow-down"}
                        style={{
                          fontSize: "0.8rem",
                          color: columnFilters.department ? "#0854a0" : "#666",
                          marginLeft: "0.5rem"
                        }}
                      ></ui5-icon>
                    </div>
                    {activeFilter === "department" && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 1000,
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: "200px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}>
                        <ui5-label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                          Filter by Department:
                        </ui5-label>
                        <ui5-input
                          placeholder="Enter department..."
                          style={{ width: "100%", marginBottom: "0.5rem" }}
                          value={columnFilters.department}
                          onInput={(e) => setColumnFilters({ ...columnFilters, department: e.target.value })}
                        ></ui5-input>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <ui5-button
                            design="Transparent"
                            onClick={() => {
                              setColumnFilters({ ...columnFilters, department: "" });
                              setActiveFilter(null);
                            }}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Clear
                          </ui5-button>
                          <ui5-button
                            design="Emphasized"
                            onClick={() => setActiveFilter(null)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Apply
                          </ui5-button>
                        </div>
                      </div>
                    )}
                  </ui5-table-header-cell>

                  <ui5-table-header-cell style={{ position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "4px"
                      }}
                      onClick={() => setActiveFilter(activeFilter === "email" ? null : "email")}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <ui5-label>Email</ui5-label>
                      <ui5-icon
                        name={columnFilters.email ? "filter" : "slim-arrow-down"}
                        style={{
                          fontSize: "0.8rem",
                          color: columnFilters.email ? "#0854a0" : "#666",
                          marginLeft: "0.5rem"
                        }}
                      ></ui5-icon>
                    </div>
                    {activeFilter === "email" && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 1000,
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: "200px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}>
                        <ui5-label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                          Filter by Email:
                        </ui5-label>
                        <ui5-input
                          placeholder="Enter email..."
                          style={{ width: "100%", marginBottom: "0.5rem" }}
                          value={columnFilters.email}
                          onInput={(e) => setColumnFilters({ ...columnFilters, email: e.target.value })}
                        ></ui5-input>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <ui5-button
                            design="Transparent"
                            onClick={() => {
                              setColumnFilters({ ...columnFilters, email: "" });
                              setActiveFilter(null);
                            }}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Clear
                          </ui5-button>
                          <ui5-button
                            design="Emphasized"
                            onClick={() => setActiveFilter(null)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Apply
                          </ui5-button>
                        </div>
                      </div>
                    )}
                  </ui5-table-header-cell>

                  <ui5-table-header-cell style={{ position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "4px"
                      }}
                      onClick={() => setActiveFilter(activeFilter === "phone" ? null : "phone")}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <ui5-label>Phone</ui5-label>
                      <ui5-icon
                        name={columnFilters.phone ? "filter" : "slim-arrow-down"}
                        style={{
                          fontSize: "0.8rem",
                          color: columnFilters.phone ? "#0854a0" : "#666",
                          marginLeft: "0.5rem"
                        }}
                      ></ui5-icon>
                    </div>
                    {activeFilter === "phone" && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 1000,
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: "200px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}>
                        <ui5-label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                          Filter by Phone:
                        </ui5-label>
                        <ui5-input
                          placeholder="Enter phone..."
                          style={{ width: "100%", marginBottom: "0.5rem" }}
                          value={columnFilters.phone}
                          onInput={(e) => setColumnFilters({ ...columnFilters, phone: e.target.value })}
                        ></ui5-input>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <ui5-button
                            design="Transparent"
                            onClick={() => {
                              setColumnFilters({ ...columnFilters, phone: "" });
                              setActiveFilter(null);
                            }}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Clear
                          </ui5-button>
                          <ui5-button
                            design="Emphasized"
                            onClick={() => setActiveFilter(null)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Apply
                          </ui5-button>
                        </div>
                      </div>
                    )}
                  </ui5-table-header-cell>

                  <ui5-table-header-cell style={{ position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "4px"
                      }}
                      onClick={() => setActiveFilter(activeFilter === "status" ? null : "status")}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <ui5-label>Status</ui5-label>
                      <ui5-icon
                        name={columnFilters.status ? "filter" : "slim-arrow-down"}
                        style={{
                          fontSize: "0.8rem",
                          color: columnFilters.status ? "#0854a0" : "#666",
                          marginLeft: "0.5rem"
                        }}
                      ></ui5-icon>
                    </div>
                    {activeFilter === "status" && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 1000,
                        backgroundColor: "white",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: "180px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}>
                        <ui5-label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                          Filter by Status:
                        </ui5-label>
                        <ui5-select
                          style={{ width: "100%", marginBottom: "0.5rem" }}
                          onChange={(e) => setColumnFilters({ ...columnFilters, status: e.detail.selectedOption.textContent === "All" ? "" : e.detail.selectedOption.textContent })}
                        >
                          <ui5-option selected={!columnFilters.status}>All</ui5-option>
                          <ui5-option selected={columnFilters.status === "Active"}>Active</ui5-option>
                          <ui5-option selected={columnFilters.status === "Remote"}>Remote</ui5-option>
                          <ui5-option selected={columnFilters.status === "On Leave"}>On Leave</ui5-option>
                        </ui5-select>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <ui5-button
                            design="Transparent"
                            onClick={() => {
                              setColumnFilters({ ...columnFilters, status: "" });
                              setActiveFilter(null);
                            }}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Clear
                          </ui5-button>
                          <ui5-button
                            design="Emphasized"
                            onClick={() => setActiveFilter(null)}
                            style={{ fontSize: "0.8rem" }}
                          >
                            Apply
                          </ui5-button>
                        </div>
                      </div>
                    )}
                  </ui5-table-header-cell>
                </ui5-table-header-row>

                {filteredPeople.map((person) => (
                  <ui5-table-row key={person.id}>
                    <ui5-table-cell>
                      <ui5-label>{person.name}</ui5-label>
                    </ui5-table-cell>
                    <ui5-table-cell>
                      <ui5-label>{person.position}</ui5-label>
                    </ui5-table-cell>
                    <ui5-table-cell>
                      <ui5-label>{person.department}</ui5-label>
                    </ui5-table-cell>
                    <ui5-table-cell>
                      <ui5-link href={`mailto:${person.email}`}>{person.email}</ui5-link>
                    </ui5-table-cell>
                    <ui5-table-cell>
                      <ui5-label>{person.phone}</ui5-label>
                    </ui5-table-cell>
                    <ui5-table-cell>
                      <span style={{
                        padding: "0.25rem 0.5rem",
                        borderRadius: "12px",
                        fontSize: "0.8rem",
                        backgroundColor: person.status === "Active" ? "#107e3e" :
                                       person.status === "Remote" ? "#0854a0" :
                                       person.status === "On Leave" ? "#df6f0c" : "#89919a",
                        color: "white"
                      }}>
                        {person.status}
                      </span>
                    </ui5-table-cell>
                  </ui5-table-row>
                ))}
              </ui5-table>

              {filteredPeople.length === 0 && (
                <div style={{
                  textAlign: "center",
                  padding: "2rem",
                  color: "#666"
                }}>
                  No results found for "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        );
      }

      // Card view for Customers page
      if (currentMenuItem.key === "customers") {
        return (
          <div style={{ padding: "1rem" }}>
            <ui5-title level="H2">{content.title}</ui5-title>
            <div style={{
              marginTop: "1rem",
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))"
            }}>
              {content.items?.map((item, index) => (
                <ui5-card key={index}>
                  <ui5-card-header
                    slot="header"
                    title-text={item.title}
                    subtitle-text={item.description}
                  ></ui5-card-header>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "1rem"
                    }}>
                      <ui5-icon name="customer"></ui5-icon>
                      <ui5-badge color-scheme={item.additionalText === "Premium" ? "8" : "7"}>
                        {item.additionalText}
                      </ui5-badge>
                    </div>
                    <ui5-button design="Transparent" icon="email" style={{ width: "100%" }}>
                      Contact Customer
                    </ui5-button>
                  </div>
                </ui5-card>
              ))}
            </div>
          </div>
        );
      }

      // Default list view for other pages
      return (
        <div style={{ padding: "1rem" }}>
          <ui5-title level="H2">{content.title}</ui5-title>
          <ui5-list style={{ marginTop: "1rem" }}>
            {content.items?.map((item, index) => (
              <ui5-li
                key={index}
                icon={item.icon}
                description={item.description}
                additional-text={item.additionalText || item.price}
              >
                {item.title}
              </ui5-li>
            ))}
          </ui5-list>
        </div>
      );
    }

    return <div>Content not found</div>;
  };

  return (
    <div style={{ flex: 1, backgroundColor: "#fafafa", overflow: "auto" }}>
      <div style={{
        padding: "1rem 1.5rem",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "white"
      }}>
        <ui5-title level="H4">Content</ui5-title>
      </div>
      <div style={{
        backgroundColor: "white",
        margin: "1rem",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
      }}>
        {renderContent()}
      </div>
    </div>
  );
}