export class CreateTodoDto {
  name: string;
  description?: string; // Opcional
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'; // Enum do Prisma
}
