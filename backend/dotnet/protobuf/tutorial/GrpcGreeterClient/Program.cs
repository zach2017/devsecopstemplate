#region snippet2
using System.Threading.Tasks;
using Grpc.Net.Client;
using GrpcGreeterClient;

#region snippet

// The port number must match the port of the gRPC server.

if (Environment.GetCommandLineArgs().Length > 1)
{
    string name = Environment.GetCommandLineArgs()[1];

    using var channel = GrpcChannel.ForAddress(name);
    var client = new Greeter.GreeterClient(channel);
    var reply = await client.SayHelloAsync(
                      new HelloRequest { Name = "Zac GreeterClient" });
    Console.WriteLine("Greeting: " + reply.Message);
    Console.WriteLine("Press any key to exit...");
    Console.ReadKey();
} else
{
    Console.WriteLine("usage: client <proto server url>");
    Console.ReadKey();
}
#endregion
#endregion
