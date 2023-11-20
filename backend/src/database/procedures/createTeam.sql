CREATE OR ALTER PROCEDURE createTeam(@team_ID VARCHAR(200), @team_Name VARCHAR(200), @members VARCHAR(1000), @project_assigned VARCHAR(500))
AS
BEGIN
    INSERT INTO Teams (team_ID, team_Name, members, project_assigned) VALUES(@team_ID, @team_Name, @members, @project_assigned)
END

SELECT * FROM Teams