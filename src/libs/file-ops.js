import { s3Client } from "@/utils/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile({ key, folder, body }) {
  const buffer = Buffer.from(await body.arrayBuffer());

  try {
    const command = new PutObjectCommand({
      Bucket: "devscale-batch8",
      Key: `${folder}/${key}`,
      Body: buffer, // ArrayBuffer -> [80,32,32,32,24,34,23,32,53]
      ContentType: body.type, // application/octet-stream // https://domain-r2.com/devscale-batch8/events/image.png
    });

    const fileUpload = await s3Client.send(command);
    console.log(fileUpload);
  } catch (error) {
    console.error(error);
  }
}
