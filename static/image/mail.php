
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone   = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);

    try {

 $mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'jsmwealth@gmail.com';
$mail->Password = 'maclsxnwsrspbdzt';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->SMTPDebug = 2;

        $mail->setFrom('jsmwealth@gmail.com', 'JSM Health Wealth Insurance');
        $mail->addAddress('jsmwealth@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(false);
        $mail->Subject = "You Have One New Lead";

        $mail->Body =
        "New Lead Details:\n\n".
        "Full Name: $name\n".
        "Email: $email\n".
        "Phone: $phone\n".
        "Service: $service\n\n".
        "Message:\n$message";

        $mail->send();

        // echo '<div class="top-alert alert alert-success alert-dismissible fade show mb-0" role="alert">
        // Message Sent Successfully ✅
        // <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        // </div>';
        header("Location: index.php?success=1");


        exit(); // 🔴 Yaha script stop ho jayega

    } catch (Exception $e) {

        echo '<div class="top-alert alert alert-danger alert-dismissible fade show mb-0" role="alert">
        Mailer Error: '.$mail->ErrorInfo.'
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>';

        exit(); // 🔴 Error me bhi script stop
    }
}
?>
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if(isset($_POST['send'])){

$name  = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$budget = $_POST['budget'];
$goal   = $_POST['goal'];

$mail = new PHPMailer(true);

try {

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'jsmwealth@gmail.com';
$mail->Password = 'maclsxnwsrspbdzt'; // Gmail App Password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;

// Sender
$mail->setFrom('jsmwealth@gmail.com', 'JSM Wealth Website');

// Seller ko mail
$mail->addAddress('jsmwealth@gmail.com');

// Customer reply
$mail->addReplyTo($email, $name);

$mail->isHTML(false);

$mail->Subject = "New SIP Investment Lead";

$mail->Body =
"New SIP Inquiry Details:\n\n".
"Full Name: $name\n".
"Mobile Number: $phone\n".
"Email Address: $email\n".
"Monthly Investment Budget: $budget\n".
"Select Your Goal: $goal\n\n".
"Client is interested in custom investment plan.";

$mail->send();

header("Location: sip.php?status=success");
exit();

} catch (Exception $e) {

header("Location: sip.php?status=error");
exit();

}

}
?>
 <section class="ulip ">

  <!-- NAVBAR -->
  <section class="ulip-nav-section" id="ulipNav">
    <div class="container">
      <div class="ulip-nav-wrapper">
        
        <div class="nav-arrow" id="scrollLeft">
          <i class="fa fa-chevron-left"></i>
        </div>

        <div class="ulip-links" id="ulipNavLinks">
          <a href="#section1">What is a ULIP?</a>
          <a href="#section2">How Does a ULIP Work?</a>
          <a href="#section3">Key Features of ULIPs</a>
          <a href="#section4">Common Myths About ULIPs</a>
          <a href="#section5">Who Can Opt for This Plan?</a>
          <a href="#section6">Benefits of a ULIP Plan</a>
          <a href="#section7">Why Invest in ULIPs?</a>
        </div>

        <div class="nav-arrow" id="scrollRight">
          <i class="fa fa-chevron-right"></i>
        </div>

      </div>
    </div>
  </section>

  <!-- SECTION 1 -->
  <section  class="content-section">
    <div class="content-box" id="section1">
      <h2>What is a ULIP?</h2>
      <div class="divider"></div>
      <p>
        ULIPs combine life insurance with market-linked investments.
        Premiums are split between coverage and funds (equity, debt, or hybrid)
        based on risk appetite. They offer flexible, long-term wealth creation
        and tax-efficient maturity benefits for goals like child’s education
        or retirement.

      
      </p>
    </div>
  </section>

  <!-- SECTION 2 -->
  <section  class="content-section">
    <div class="content-box" id="section2">
      <h2>How Does a ULIP Plan Work?</h2>
      <div class="divider"></div>
      <ul>
        <li>Pay regular premiums (monthly/quarterly/yearly). A portion funds life insurance, and the remainder is invested in chosen funds.</li>
        <li>Investment is divided into units at a fixed face value; the unit value is called Net Asset Value (NAV).</li>
        <li>Fund value grows with market performance; you can switch funds as per policy conditions.</li>
        <li>Receive the accumulated fund value at maturity.</li>
        <li>In case of death, the family receives the higher of Sum Assured or Total Fund Value (as per policy terms).</li>
      </ul>
    </div>
  </section>

  <!-- SECTION 3 -->
  <section  class="content-section">
    <div class="content-box" id="section3">
      <h2>Key Features of ULIPs</h2>
      <div class="divider"></div>

      <h5>Insurance + Investment</h5>
      <p>ULIPs offer dual benefits: market-linked wealth creation along with life insurance protection.</p>

      <h5>Switch Between Funds</h5>
      <p>Switch between equity and debt funds as per policy conditions.</p>

      <h5>Premium Redirection</h5>
      <p>Redirect future premiums to different funds anytime as per allocation preferences.</p>

      <h5>Partial Withdrawals</h5>
      <p>After the 5-year lock-in period, partial withdrawals are allowed as per policy terms.</p>
    </div>
  </section>

  <!-- SECTION 4 -->
  <section  class="content-section">
    <div class="content-box" id="section4">
      <h2>Common Myths About ULIPs</h2>
      <div class="divider"></div>

      <p><strong>Myth:</strong> ULIPs give low returns.<br>
      <strong>Reality:</strong> Modern ULIPs offer competitive market-linked returns with reduced charges.</p>

      <p><strong>Myth:</strong> ULIPs are expensive.<br>
      <strong>Reality:</strong> Regulatory reforms have significantly reduced charges.</p>

      <p><strong>Myth:</strong> ULIPs are high risk.<br>
      <strong>Reality:</strong> Risk depends on the selected fund type.</p>

      <p><strong>Myth:</strong> ULIPs are complicated.<br>
      <strong>Reality:</strong> They are easy to manage once fund allocation is understood.</p>

      <p><strong>Myth:</strong> Market fluctuations affect life cover.<br>
      <strong>Reality:</strong> Life cover remains unaffected as per policy terms.</p>
    </div>
  </section>

  <!-- SECTION 5 -->
  <section id="section5" class="content-section">
    <div class="content-box" id="section5">
      <h2>Who Can Opt for This Plan?</h2>
      <div class="divider"></div>
      <ul>
        <li>Long-term wealth builders and goal-based planners</li>
        <li>Investors seeking protection and growth</li>
        <li>Tax-conscious individuals</li>
        <li>Young professionals and families</li>
      </ul>
    </div>
  </section>

  <!-- SECTION 6 -->
  <section  class="content-section">
    <div class="content-box" id="section6">
      <h2>Benefits of a ULIP Plan</h2>
      <div class="divider"></div>
      <ul>
        <li>Life cover with wealth creation</li>
        <li>Disciplined long-term investment</li>
        <li>Market-linked growth potential</li>
        <li>Tax-efficient returns</li>
        <li>Suitable for retirement, child education, or long-term goals</li>
        <li>Power of compounding</li>
        <li>Flexibility in investment</li>
        <li>100% tax-free maturity (as per policy terms)</li>
      </ul>
    </div>
  </section>

  <!-- SECTION 7 -->
  <section  class="content-section">
    <div class="content-box" id="section7">
      <h2>Why Invest in ULIPs?</h2>
      <div class="divider"></div>

      <h5>Dual Benefit</h5>
      <p>ULIPs provide life insurance protection along with market-linked wealth creation in one plan.</p>

      <h5>Flexible Funds</h5>
      <p>Choose equity, debt, or hybrid funds based on your risk profile and goals.</p>

      <h5>Tax Efficiency</h5>
      <p>Premiums may qualify for Section 80C benefits, and maturity proceeds may be tax-free under Section 10(10D)*.</p>

      <h5>Long-Term Planning</h5>
      <p>Ideal for retirement, children’s education, and long-term wealth creation.</p>

      <h5>Disciplined Investing</h5>
      <p>The 5-year lock-in period encourages long-term financial growth.</p>

      <h5>Fund Switching</h5>
      <p>Switch between funds during the policy term as per market conditions and needs.</p>

    </div>
  </section>

</section>