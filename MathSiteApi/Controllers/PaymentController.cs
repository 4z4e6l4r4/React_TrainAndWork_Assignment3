using Iyzipay.Request;
using Iyzipay.Model;
using Iyzipay;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class PaymentController : ControllerBase
{
    private Options options;

    public PaymentController()
    {
        options = new Options();
        options.ApiKey = "iyzico_api_key"; // İyzico API anahtarınız
        options.SecretKey = "iyzico_secret_key"; // İyzico gizli anahtarınız
        options.BaseUrl = "https://sandbox-api.iyzipay.com"; // veya "https://api.iyzipay.com" gerçek ortam için
    }

    [HttpPost("purchase")]
    public ActionResult PurchaseCourse([FromBody] PaymentRequest paymentRequest)
    {
        CreatePaymentRequest request = new CreatePaymentRequest();
        request.Locale = Locale.TR.ToString();
        request.ConversationId = "123456789";
        request.Price = "1"; // Örnek fiyat
        request.PaidPrice = "1.2"; // Komisyon dahil ödenen toplam tutar
        request.Currency = Currency.TRY.ToString();
        // Diğer ödeme detayları...

        Payment payment = Payment.Create(request, options);
        if (payment.Status == "success")
        {
            // Ödeme başarılı ise kullanıcıya kurs erişimi sağlama işlemini burada yap
            return Ok();
        }
        else
        {
            // Ödeme başarısız ise hata mesajı döndür
            return BadRequest(payment.ErrorMessage);
        }
    }
}

public class PaymentRequest
{
    // Ödeme detayları için gerekli property'ler
}
