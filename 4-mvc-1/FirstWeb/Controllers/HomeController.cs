using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace FirstWeb.Controllers;

public class HomeController : Controller
{
    // attribute
    [HttpGet("")]

    // action method
    public string Index()
    {
        return "Index Page edited";
    }

    [HttpGet("about")]
    public string About()
    {
        return "About page";
    }

    [HttpGet("services")]
    public string Services()
    {
        return "Share are our company's services";
    }


    // dynamic route segment
    // route parameter
    [HttpGet("services/{service}")]
    public string ServciePage(string service)
    {
        return $"Service: {service}";
    }

    [HttpGet("portfolio/{portfolioId}")]
    public string PortfolioPage(int portfolioId)
    {
        return $"Viewing project {portfolioId}";
    }

    [HttpGet("services/{service}/{serviceId}")]
    public string ServiceIdPage(string service, int serviceId)
    {
        return $"{service}: {serviceId}";
    }

    [HttpGet("repeat/{word}/{number}")]
    public string Repeat(string word, int number)
    {
        var output = "";
        for (var i = 1; i <= number; i++)
        {
            output = output + word + "/n";
        }
        return output;
    }
}