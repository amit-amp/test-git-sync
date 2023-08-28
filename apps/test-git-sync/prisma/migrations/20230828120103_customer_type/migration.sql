-- CreateEnum
CREATE TYPE "EnumCustomerCustomerType" AS ENUM ('Organization', 'Personal');

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "customerType" "EnumCustomerCustomerType";
