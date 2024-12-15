CREATE TABLE "authenticator" (
	"credentialID" text NOT NULL,
	"userId" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"credentialPublicKey" text NOT NULL,
	"counter" integer NOT NULL,
	"credentialDeviceType" text NOT NULL,
	"credentialBackedUp" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticator_userId_credentialID_pk" PRIMARY KEY("userId","credentialID"),
	CONSTRAINT "authenticator_credentialID_unique" UNIQUE("credentialID")
);
--> statement-breakpoint
ALTER TABLE "answers" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "field_options" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "form_submissions" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "forms" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "questions" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "answers" CASCADE;--> statement-breakpoint
DROP TABLE "field_options" CASCADE;--> statement-breakpoint
DROP TABLE "form_submissions" CASCADE;--> statement-breakpoint
DROP TABLE "forms" CASCADE;--> statement-breakpoint
DROP TABLE "questions" CASCADE;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "stripe_customer_id";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "subscribed";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");--> statement-breakpoint
DROP TYPE "public"."field_type";