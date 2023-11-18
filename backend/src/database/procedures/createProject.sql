CREATE OR ALTER PROCEDURE createProject(
    @project_id VARCHAR(100) ,
    @project_name VARCHAR(200),
    @project_description VARCHAR(800),
    @project_deadline VARCHAR(200),
    @assigned_to VARCHAR(200)
    
)
AS
BEGIN

    INSERT INTO Projects(project_id, project_name, project_description, project_deadline, assigned_to)
    VALUES(@project_id, @project_name, @project_description, @project_deadline, @assigned_to)

END

SELECT * FROM Projects

ALTER TABLE Projects ADD isDeleted BIT DEFAULT 0