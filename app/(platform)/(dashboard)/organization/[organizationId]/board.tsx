import { deleteBoard } from "@/actions/delete-board";
import { FormDelete } from "./form-delete";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form
      action={deleteBoardWithId}
      className="flex items-center gap-x-2"
      key={id}
    >
      Board Title: {title}
      <FormDelete />
    </form>
  );
};

export default Board;
