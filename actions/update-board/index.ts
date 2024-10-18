"use server";

import { createAuditLog } from "@/lib/create-audit-log";
import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UpdateBoard } from "./schema";
import { InputType, ReturnType } from "./type";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, id } = data;

  let board;

  try {
    board = await db.board.update({
      data: {
        title,
      },
      where: {
        id,
        orgId,
      },
    });

    await createAuditLog({
      entityId: board.id,
      entityTitle: board.title,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.UPDATE,
    });
  } catch {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/board/${board.id}`);

  return { data: board };
};

export const updateBoard = createSafeAction(UpdateBoard, handler);
