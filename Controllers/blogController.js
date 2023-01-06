const userLists = [
    {
      id: 1,
      name: "Abdirahman Mohamed",
      email: "Buushe@gmail.com",
      password: "Buushe3456",
    },
    {
      id: 2,
      name: "khadar yusuf",
      email: "khaan12@gmail.com",
      password: "khaan5577",
    },
    
  ];
  
  //
  const allBlog = (req, res) => {
    res.status(200).json({
      message: "Get the list of all blogs",
      list: userLists,
    });
  };
  
  //
  const oneBlog = (req, res) => {
    const id = req.params.id - 1;
    res.status(200).json({
      message: `You got the user blog  list by Id`,
      list: userLists[id],
    });
  };
  // 
  const createBlog = (req, res) => {
    res.status(200).json({ message: "Your blog was being created" });
  };
  
  //
  const editBlog = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
      message: `You are edited the blog list that have the id of ${id}`,
    });
  };
  
  // 
  const deleteBlog = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `Your have deleted blog list  ` ,
    list:userLists[id],
  })
    
  };
  
  module.exports = { allBlog, oneBlog, createBlog, editBlog, deleteBlog };