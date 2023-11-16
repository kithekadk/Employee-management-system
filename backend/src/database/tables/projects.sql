CREATE TABLE Projects (
    project_id VARCHAR(100) NOT NULL,
    project_name VARCHAR(200) NOT NULL UNIQUE,
    project_description VARCHAR(800) NOT NULL,
    project_deadline VARCHAR(200) NOT NULL,
    assigned_to VARCHAR(200),
    status VARCHAR(15) NOT NULL DEFAULT 'pending',
    isDeleted BIT DEFAULT 0
)


DROP TABLE Projects