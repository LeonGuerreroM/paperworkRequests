'use strict';

const { ASSchema, AS_TABLE } = require('../models/academicStatusModel');
const { StatusSchema, STATUS_TABLE } = require('../models/statusModel');
const { AreaSchema, AREA_TABLE } = require('../models/areaModel');
const { MajorSchema, MAJOR_TABLE } = require('../models/majorModel');
const { ProcessSchema, PROCESS_TABLE } = require('../models/processModel');
const { RolSchema, ROL_TABLE } = require('../models/rolModel');
const { LevelSchema, LEVEL_TABLE } = require('../models/notifLevelModel');
const { StudentSchema, STUDENT_TABLE } = require('../models/studentModel');
const { EmployeeSchema, EMPLOYEE_TABLE } = require('../models/employeeModel');
const { EventSchema, EVENT_TABLE } = require('../models/eventModel');
const { PostSchema, POST_TABLE } = require('../models/postModel');
const { MNSchema, MN_TABLE } = require('../models/massiveNotifModel');
const { UNSchema, UN_TABLE } = require('../models/unitaryNotifModel');
const { DischargeSchema, DISCHARGE_TABLE } = require('../models/dischargeDocsModel');
const { DictamenSchema, DICTAMEN_TABLE } = require('../models/dictamenDocsModel');
const { GraduationSchema, GRADUATION_TABLE } = require('../models/graduationDocsModel');
const { SSSchema, SS_TABLE } = require('../models/SSDocsModel');
const { PStepSchema, PSTEP_TABLE } = require('../models/processStepModel');
const { MNSSchema, MNS_TABLE } = require('../models/massiveNotif-studentModel');
const { RegistrationSchema, REGISTRATION_TABLE } = require('../models/registrationModel');
const { SemesterSchema, SEMESTER_TABLE } = require('../models/semesterDatesModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(AS_TABLE, ASSchema);
    await queryInterface.createTable(STATUS_TABLE, StatusSchema);
    await queryInterface.createTable(AREA_TABLE, AreaSchema);
    await queryInterface.createTable(MAJOR_TABLE, MajorSchema);
    await queryInterface.createTable(PROCESS_TABLE, ProcessSchema);
    await queryInterface.createTable(ROL_TABLE, RolSchema);
    await queryInterface.createTable(LEVEL_TABLE, LevelSchema);
    await queryInterface.createTable(STUDENT_TABLE, StudentSchema);
    await queryInterface.createTable(EMPLOYEE_TABLE, EmployeeSchema);
    await queryInterface.createTable(EVENT_TABLE, EventSchema);
    await queryInterface.createTable(POST_TABLE, PostSchema);
    await queryInterface.createTable(MN_TABLE, MNSchema);
    await queryInterface.createTable(UN_TABLE, UNSchema);
    await queryInterface.createTable(DISCHARGE_TABLE, DischargeSchema);
    await queryInterface.createTable(DICTAMEN_TABLE, DictamenSchema);
    await queryInterface.createTable(GRADUATION_TABLE, GraduationSchema);
    await queryInterface.createTable(SS_TABLE, SSSchema);
    await queryInterface.createTable(PSTEP_TABLE, PStepSchema);
    await queryInterface.createTable(MNS_TABLE, MNSSchema);
    await queryInterface.createTable(REGISTRATION_TABLE, RegistrationSchema);
    await queryInterface.createTable(SEMESTER_TABLE, SemesterSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(AS_TABLE);
    await queryInterface.dropTable(STATUS_TABLE);
    await queryInterface.dropTable(AREA_TABLE);
    await queryInterface.dropTable(MAJOR_TABLE);
    await queryInterface.dropTable(PROCESS_TABLE);
    await queryInterface.dropTable(ROL_TABLE);
    await queryInterface.dropTable(LEVEL_TABLE);
    await queryInterface.dropTable(STUDENT_TABLE);
    await queryInterface.dropTable(EMPLOYEE_TABLE);
    await queryInterface.dropTable(EVENT_TABLE);
    await queryInterface.dropTable(POST_TABLE);
    await queryInterface.dropTable(MN_TABLE);
    await queryInterface.dropTable(UN_TABLE);
    await queryInterface.dropTable(DISCHARGE_TABLE);
    await queryInterface.dropTable(DICTAMEN_TABLE);
    await queryInterface.dropTable(GRADUATION_TABLE);
    await queryInterface.dropTable(SS_TABLE);
    await queryInterface.dropTable(PSTEP_TABLE);
    await queryInterface.dropTable(MNS_TABLE);
    await queryInterface.dropTable(REGISTRATION_TABLE);
    await queryInterface.dropTable(SEMESTER_TABLE);
  }
};