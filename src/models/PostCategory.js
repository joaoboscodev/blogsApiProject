const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory', 
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    }, 
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories'
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      {
        as: 'blog_posts',
        through: PostCategory,
        foreingKey: 'categoryId', 
        otherKey: 'postId',
      }
    )
    models.BlogPost.belongsToMany(
      models.Category,
      {
        as: 'categories',
        through: PostCategory,
        foreingKey: 'postId',
        otherKey: 'categoryId'
      }
    )
  }

  return PostCategory;
};

module.exports = PostCategoryModel;