---shen
create table papertitle
(
	ptid int primary key,
	ptname varchar(40) not null
)

create table stu_tu
(
	tid varchar(20),
	sid varchar(20),

	primary key(tid, sid)
)

create table tu_ptitle
(
	tid varchar(20),
	ptid int,
	primary key(tid, ptid)
)

create table st_ptitle
(
	sid varchar(20) primary key,
	ptid int,
)

---ji
create table paper
(
	pid varchar(100) primary key,
	pname varchar(50),
	studentID varchar(20),
	type int,
	dt datetime,
	score float
)

---chan

create table student
(
	sid varchar(20) not null,
	passwd varchar(20) not null,
	name varchar(20) not null,
	age int,
	tel varchar(20),
	email varchar(30)
)

create table tutor
(
	tid varchar(20) not null,
	passwd varchar(20) not null,
	name varchar(20) not null,
	email varchar(30),
	tel varchar(20),
	rank varchar(20),
	desc varchar(200)
)

create table administrator
(
	aid varchar(20) not null,
	passwd varchar(20) not null,
	name varchar(10) not null
)

--
CREATE TABLE message
(
	mid int primary key,
	mstate varchar(20)  NOT NULL,
	mdatetime datetime NOT NULL,
	mto varchar(20)  NOT NULL,
	mfrom varchar(20)  NOT NULL,
	mtoname varchar(20),
	mfromname varchar(20),
	mtitle varchar(50)
)

create table messagedetail
(
	mid int NOT NULL,
	mseq int NOT NULL,
	mreplyer varchar(20) NOT NULL,
	mreply varchar(30),
	foreign key (mid) references message(mid) on delete cascade
)
CREATE TABLE notice
(
	nid int NOT NULL,
	ntitle varchar(40) NOT NULL,
	ndatetime datetime NOT NULL,
	ntarget int NOT NULL,
	ncontent varchar(5000),

	primary key (nid)
)

