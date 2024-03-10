// import mailchimp from '@mailchimp/mailchimp_marketing';
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "b1dcd374c168ddd7e1f033c9392a78ce-us11",
  server: "us11",
});

export async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}


  