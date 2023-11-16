CREATE OR ALTER PROCEDURE fetchOneProject(@project_id VARCHAR(200))
AS
BEGIN
    SELECT * FROM Projects WHERE project_id = @project_id
END