// This file contains type definitions.
// This file may or may not be deleted if we decide to use Prisma, which we probably will.
// For now though, I think we're going to do this.
export type Status = 'pending' | 'complete';

export type Todo = {
    id: string;
    title: string;
    description?: string;
    status: Status;
}
