CREATE OR ALTER PROCEDURE deleteProject(@project_id VARCHAR(200))
AS
BEGIN
    UPDATE Projects SET isDeleted = 1 WHERE project_id = @project_id AND isDeleted = 0
END

    -- DELETE FROM Projects WHERE project_id = @project_id