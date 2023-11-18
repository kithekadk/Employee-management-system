CREATE OR ALTER PROCEDURE fetchAllEmployees
AS
BEGIN
    SELECT * FROM Employees WHERE role != 'admin'
END
 



-- CREATE PROCEDURE fetchOneEmployee (@employee_id VARCHAR(200))
-- AS
-- BEGIN
--     SELECT * FROM Employees WHERE employee_id = @employee_id
-- END


-- SELECT * FROM Employees WHERE email = 'dan@yopmail.com'