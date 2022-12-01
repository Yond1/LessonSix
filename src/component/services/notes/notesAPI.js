import axios from "axios";

const API = "http://localhost:7070/api/";

class notesAPI {
  getAllNotes = async () => {
    try {
      const response = await axios.get(API + "posts");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  postNotes = async (post) => {
    try {
      const response = await axios.post(API + `posts/${post.id}`, post);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  deletNote = (id) => {
    axios.delete(API + `delete/${id}`, {
      data: {
        id: id,
      },
    });
  };
}

export default notesAPI;
