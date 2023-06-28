import { Client } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_appwrite_project_id!);

// "649c09c590a3cd8d851f";
