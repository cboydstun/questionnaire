const { DataTypes } = require('sequelize');
const { TABLE_NAMES, COLUMN_NAMES } = require('./constants'); // Import constants
const { sequelize } = require('../db/conn');

// define models 
const User = sequelize.define('User', {
  [COLUMN_NAMES.USERS.ID]: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  [COLUMN_NAMES.USERS.USER_NAME]: {
    type: DataTypes.STRING(45),
    allowNull: false,
    validate: {
      notNull: { msg: 'User name is required' },
      len: [1, 45] // Validates length is between 1 and 45 characters
    }
  },
  [COLUMN_NAMES.USERS.SCORE]: {
    type: DataTypes.INTEGER,
    defaultValue: 0 // Assuming you want to start scores at 0
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: TABLE_NAMES.USERS,
  timestamps: false,
  indexes: [{
    unique: true,
    fields: [COLUMN_NAMES.USERS.USER_NAME] // Add an index on user_name for performance
  }]
});

module.exports = {
  User
};
