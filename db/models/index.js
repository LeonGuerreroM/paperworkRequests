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

}

module.exports = { setupModels };