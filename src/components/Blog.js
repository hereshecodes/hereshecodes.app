import React from "react";

const Blog = () => {
  return (
    <div className="blog-container mx-auto my-8">
      <div class="main-post">
      <h1 className="text-3xl font-bold mb-4">
        Building a Conversational AI App with .NET, React, and ChatGPT
      </h1>
      <p>
        Intro:
        <br />
        Conversational AI has been a hot topic in the tech industry for several
        years now. With the increasing demand for chatbots and virtual
        assistants, building a conversational AI app has become a must for
        businesses of all sizes. In this blog post, we'll explore how to build a
        conversational AI app using .NET, React, and ChatGPT.
      </p>
      <h2 className="text-xl font-bold my-4">Introduction to .NET and React</h2>
      <p>
        .NET is a free, open-source development platform created by Microsoft.
        It is used to build a variety of applications, including web, mobile,
        and desktop apps. React is a JavaScript library for building user
        interfaces, developed by Facebook. React is widely used in modern web
        development because of its simplicity and scalability.
      </p>
      <h2 className="text-xl font-bold my-4">Introduction to ChatGPT</h2>
      <p>
        <a href="https://www.chat.openai.com"> ChatGPT</a>is a large language model developed by OpenAI. It is based on
        the GPT-3 architecture and is designed to generate human-like responses
        to natural language inputs. ChatGPT is a powerful tool for building
        conversational AI apps because it can understand natural language inputs
        and generate responses that sound like they were written by a human.
      </p>
      <h2 className="text-xl font-bold my-4">
        Building a Conversational AI App with .NET, React, and ChatGPT
      </h2>
      <li>Create a new React project</li>
<pre className="bg-gray-100 p-4 rounded-lg my-4">
  <code className="text-sm font-mono">
    npx create-react-app chat-gpt-app
  </code>
</pre>
<p className="mb-4">
  Step 1: This will create a new React project called "chat-gpt-app" in your current directory. Once the project is created, navigate to the project directory using:
</p>
<pre className="bg-gray-100 p-4 rounded-lg my-4">
  <code className="text-sm font-mono">
    cd chat-gpt-app
  </code>
</pre>
<p className="mb-4">
  Step 2: Next, you'll need to install the "axios" package, which will be used to make HTTP requests to your .NET back-end API:
</p>
<pre className="bg-gray-100 p-4 rounded-lg my-4">
  <code className="text-sm font-mono">
    npm install axios
  </code>
</pre>
<h2>Step 3: Use the ChatGPT API to send natural language inputs to the model and receive responses</h2>
<pre className="bg-gray-100 p-4 rounded-lg my-4" dangerouslySetInnerHTML={{ __html: `
          using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ChatGPTApp.Services
{
    public class ChatGPTService
    {
        private readonly string _endpointUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

        public async Task<string> GenerateResponseAsync(string prompt)
        {
            using var client = new HttpClient();
            client.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", "YOUR_API_KEY_HERE");

            var request = new
            {
                prompt = prompt,
                max_tokens = 150,
                n = 1,
                stop = "\n",
                temperature = 0.7
            };

            var jsonRequest = JsonConvert.SerializeObject(request);

            var content = new StringContent(jsonRequest, Encoding.UTF8, "application/json");
            var response = await client.PostAsync(_endpointUrl, content);

            var jsonResponse = await response.Content.ReadAsStringAsync();
            dynamic responseObject = JsonConvert.DeserializeObject(jsonResponse);
            var generatedText = responseObject.choices[0].text;

            return generatedText;
        }
    }

}
`}} />
      <h2>Step 4: Use .NET to create a back-end API</h2>
      <pre className="bg-gray-100 p-4 rounded-lg my-4" dangerouslySetInnerHTML={{ __html: `
         using System.Threading.Tasks;
         using ChatGPTApp.Services;
         using Microsoft.AspNetCore.Cors;
         using Microsoft.AspNetCore.Mvc;
         
         namespace ChatGPTApp.Controllers
         {
             [ApiController]
             [Route("[controller]")]
             [EnableCors("AllowAnyOrigin")]
             public class ChatGPTController : ControllerBase
             {
                 private readonly ChatGPTService _chatGPTService;
         
                 public ChatGPTController(ChatGPTService chatGPTService)
                 {
                     _chatGPTService = chatGPTService;
                 }
         
                 [HttpGet]
                 public async Task<ActionResult<string>> Get([FromQuery] string prompt)
                 {
                     var response = await _chatGPTService.GenerateResponseAsync(prompt);
                     return Ok(response);
                 }
             }
         }
         
`}} />
<h2>Step 4: Use .NET to create a back-end API</h2>
<p>To deploy the app to Azure, you can follow these steps:

<li><a href="https://azure.microsoft.com/en-us/free/">Create an Azure account </a>and log in to the Azure portal.</li>
<li>Create a new App Service and configure it with the necessary settings, such as the runtime stack, deployment source, and environment variables.</li>
<li>Deploy the app to the App Service using your preferred deployment method, such as Git, FTP, or Azure CLI.</li>
</p>
</div>
<div class="side-posts">
<h1 className="text-3xl font-bold mb-4">New Posts every Tuesday and Thursday!</h1>
    {/* <ul>
   
      <li><a href="#">Post 1</a></li>
      <li><a href="#">Post 2</a></li>
      <li><a href="#">Post 3</a></li>
      <li><a href="#">Post 4</a></li>
    </ul> */}
  </div>
</div>
);
};
export default Blog;