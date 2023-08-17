const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreingKey: true,
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    }
  }, {
    underscored: true,
    tableName: 'blog_posts',
    timestamps: false
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User, 
      {foreingKey: 'userId', as: 'users'}
    )
  }

  return BlogPost;
};

module.exports = BlogPostModel;