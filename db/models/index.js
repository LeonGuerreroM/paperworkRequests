const { MajorSchema, Major } = require('./majorModel');
const { ASSchema, AS } = require('./academicStatusModel');
const { StatusSchema, Status } = require('./statusModel');
const { AreaSchema, Area } = require('./areaModel');
const { RolSchema, Rol } = require('./rolModel');
const { ProcessSchema, Process } = require('./processModel');
const { LevelSchema, Level } = require('./notifLevelModel');
const { StudentSchema, Student } = require('./studentModel');
const { PostSchema, Post } = require('./postModel');
const { EventSchema, Event } = require('./eventModel');
const { MNSchema, MN } = require('./massiveNotifModel');
const { EmployeeSchema, Employee } = require('./employeeModel');
const { DischargeSchema, Discharge } = require('./dischargeDocsModel');
const { DictamenSchema, Dictamen } = require('./dictamenDocsModel');
const { GraduationSchema, Graduation } = require('./graduationDocsModel');
const { SSSchema, SS } = require('./SSDocsModel');
const { PStepSchema, PStep } = require('./processStepModel');
const { UNSchema, UN } = require('./unitaryNotifModel');
const { MNSSchema, MNS } = require('./massiveNotif-studentModel');

function setupModels(sequelize){
    Major.init(MajorSchema, Major.config(sequelize));
    AS.init(ASSchema, AS.config(sequelize));
    Status.init(StatusSchema, Status.config(sequelize));
    Area.init(AreaSchema, Area.config(sequelize));
    Rol.init(RolSchema, Rol.config(sequelize));
    Process.init(ProcessSchema, Process.config(sequelize));
    Level.init(LevelSchema, Level.config(sequelize));
    Student.init(StudentSchema, Student.config(sequelize));
    Post.init(PostSchema, Post.config(sequelize));
    Event.init(EventSchema, Event.config(sequelize));
    MN.init(MNSchema, MN.config(sequelize));
    Employee.init(EmployeeSchema, Employee.config(sequelize));
    Discharge.init(DischargeSchema, Discharge.config(sequelize));
    Dictamen.init(DictamenSchema, Dictamen.config(sequelize));
    Graduation.init(GraduationSchema, Graduation.config(sequelize));
    SS.init(SSSchema, SS.config(sequelize));
    PStep.init(PStepSchema, PStep.config(sequelize));
    UN.init(UNSchema, UN.config(sequelize));
    MNS.init(MNSSchema, MNS.config(sequelize));


}

module.exports = { setupModels };