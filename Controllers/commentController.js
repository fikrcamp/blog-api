const usersComments = [
    {
      userId: 1,
      name: "ABDIRAHMAN",
      comment: "Your post is great bro ",
    },
    {
      userId: 1,
      name: "farhan",
      comment: "Thnk you bro",
    },
  ];
  
  //  
  const getComment = (req, res) => {
    res.status(200).json({
      message: "Here are all the comments ",
      comment: usersComments,
    });
  };
  
  //  
  const createComment = (req, res) => {
    res.status(200).json({
      message: "You  have created a blog  comment thanks",
    });
  };
  
  // 
  const editComment = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `you have edited  your  comment ${id}` });
  };
  
  //
  const deleteComment = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `you have deleted  your comment  ${id}` });
  };
  
  module.exports = { getComment, createComment, editComment, deleteComment };