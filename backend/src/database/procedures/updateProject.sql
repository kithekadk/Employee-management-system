CREATE OR ALTER PROCEDURE updateProject(@project_id VARCHAR(200), @project_name VARCHAR(300), @project_description VARCHAR(800), @project_deadline VARCHAR(200), @assigned_to VARCHAR(200))
AS
BEGIN
    UPDATE Projects SET project_name = @project_name, project_description = @project_description, project_deadline = @project_deadline, assigned_to = @assigned_to WHERE project_id = @project_id AND isDeleted = 0
END

