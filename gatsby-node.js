const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const counterTemplate = path.resolve("src/templates/counter.js");
  const pages = [1, 2, 3];
  pages.forEach((page) =>
    createPage({
      path: "/contador-" + page,
      component: counterTemplate,
      context: {
        page: page,
      },
    })
  );
};
