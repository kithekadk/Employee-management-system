CREATE OR ALTER PROCEDURE fetchAllProjects
AS
BEGIN
    SELECT * FROM Projects WHERE isDeleted = 0
END
 