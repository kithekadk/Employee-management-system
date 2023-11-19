CREATE OR ALTER PROCEDURE deleteEmployee(@employee_id VARCHAR(200), @isDeleted BIT)
AS
BEGIN
    UPDATE Employees SET isDeleted = @isDeleted WHERE employee_id = @employee_id
END

-- DELETE FROM Employees WHERE employee_id = '4098b7ca-4cd3-42f0-9504-78d94f59f162'