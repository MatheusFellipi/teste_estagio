CREATE TABLE navers (
	ID INT PRIMARY KEY NOT NULL,
	name VARCHAR (50) NOT NULL,
	job_role VARCHAR (50) NOT NULL,
	birthdate DATE NOT NULL,
	admission_date DATE NOT NULL,
	
	created_at timestamp with time zone, 
	updated_at timestamp with time zone
)

CREATE TABLE project_navers (
	ID INT PRIMARY KEY NOT NULL,
	naver_id INT,
	project_id INT,
	CONSTRAINT fk_project_id 
		 FOREIGN KEY (project_id)
				REFERENCES project(ID),
	CONSTRAINT fk_naver_id
		 FOREIGN KEY (naver_id)
				REFERENCES navers(ID)
	
)

CREATE TABLE project (
	ID INT PRIMARY KEY NOT NULL,
	name VARCHAR (50) NOT NULL,
	created_at TIMESTAMP, 
	updated_at TIMESTAMP

)

INSERT INTO navers(ID,name,job_role,birthdate,admission_date)
VALUES(1,'matheus','front end','2012/06/18','2012/06/18');
     
INSERT INTO project(ID,name)
VALUES(1,'front end');

INSERT INTO public.project_navers(
	id, naver_id, project_id)
	VALUES (2, 1, 1);
     
	 
SELECT * FROM navers
ORDER BY admission_date;

SELECT * FROM project 




















