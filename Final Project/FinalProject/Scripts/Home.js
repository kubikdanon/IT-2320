//////////////////////////////////////////////////////////
/////////////////Account Info Page////////////////////////NOTE: I tried to replace my main element with the external .html file, but I wasn't able to, so I had to do it this way.
//////////////////////////////////////////////////////////

var AccountInfoHTML = '<div class="table"> \
            <div class="tableleft"> \
                <div class="tableitem"><span>Account Name</span></div> \
                <div class="tableitem">Password</div> \
                <div class="tableitem">E-mail Address</div> \
            </div> \
            <div class="tableright"> \
                <div class="tableitem" id="tablename"></div> \
                <div class="tableitem"><input type="password" id="tablepass"><button type="button" id="updatepass">Update</button></div> \
                <div class="tableitem"><input type="email" id="tableemail"><button type="button" id="updateemail">Update</button></div> \
            </div> \
        </div> \
        <hr /> \
        <div class="addform"> \
            <label for="elementname">ElementName:</label> \
            <input type="text" name="elementname" id="ename"> \
            <br /> \
            <label for="elementvalue">ElementValue:</label> \
            <input type="text" name="elementvalue" id="evalue"> \
            <br /> \
            <button type="button" id="addelement">Add</button> \
        </div>';

//////////////////////////////////////////////////////////
//////////////////////////END/////////////////////////////
//////////////////////////////////////////////////////////

var LoginPage = {} // Login Page
var AccountInfoPage = {} // Account Info Page

var GlobalUser; // Global Variable storing the user value

AccountInfoPage.GetInfo = function (user)
{
    $.ajax
    ({
        type: "GET",
        url: "Home/GetAccountInformation",
        data: { Username: user },
        success: function (result)
        {
            var deserializedData = JSON.parse(result);
            if (deserializedData.Message == "Success")
            {
                var Payload = JSON.parse(deserializedData.Payload);
                $("#tablename").text(Payload.account.username);
                $("#tablepass").val(Payload.account.password);
                $("#tableemail").val(Payload.account.emailadd);
            }
            else
            {
                alert("ERROR");
            }
        }
    });
}

AccountInfoPage.UpdateInfo = function (user, ename, evalue)
{
    $.ajax
    ({
        type: "GET",
        url: "Home/AddOrUpdateElement",
        data: { Username: user, ElementName: ename, ElementValue: evalue },
        success: function (result)
        {
            var deserializedData = JSON.parse(result);
            if (deserializedData.Message == "Success")
            {
                var Payload = JSON.parse(deserializedData.Payload);
                $("#tablename").text(Payload.account.username);
                $("#tablepass").val(Payload.account.password);
                $("#tableemail").val(Payload.account.emailadd);
            }
            else
            {
                alert("ERROR");
            }
        }
    });
}

LoginPage.Login = function ()
{
    $.ajax
    ({
        type: "GET",
        url: "Home/Login",
        data: { Username: $("#loginu").val(), Password: $("#loginp").val() },
        success: function (result) {
            var deserializedData = JSON.parse(result);
            var user = $("#loginu").val();
            if (deserializedData.Message == "Error")
            {
                if (deserializedData.Username)
                    $("#loginerror").text("Username is " + deserializedData.Username);
                if (deserializedData.Password)
                    $("#loginerror").text("Password is " + deserializedData.Password);
            }
            else 
            {
                $(".main").replaceWith(AccountInfoHTML); // going to the second page
                AccountInfoPage.GetInfo(user);
                GlobalUser = user;
            }
        }
    });
}

LoginPage.CreateAccount = function ()
{
    $.ajax
   ({
       type: "GET",
       url: "Home/CreateAccount",
       data: { Username: $("#createu").val(), Password: $("#createp").val(), EmailAdd: $("#emailadd").val(), EmailCon: $("#emailcon").val() },
       success: function (result) {
           var deserializedData = JSON.parse(result);
           var user = $("#loginu").val();
           if (deserializedData.Message == "Error")
           {
               if (deserializedData.Username == "Invalid")
                   $("#createerror").text("Username must be at least 6 characters");
               if (deserializedData.Username == "Exists")
                   $("#createerror").text("Username is already taken");
               if (deserializedData.Password == "Invalid")
                   $("#createerror").text("Password must be at least 6 characters");
               if (deserializedData.EmailAdd == "Invalid")
                   $("#createerror").text("Email must have a value and contain \"@\"");
               if (deserializedData.EmailCon == "Invalid")
                   $("#createerror").text("Email must have a value");
               if (deserializedData.EmailCon == "Mismatch")
                   $("#createerror").text("Emails must match");
           }
           else 
           {
               $(".main").replaceWith(AccountInfoHTML); // going to the second page
               AccountInfoPage.GetInfo(user);
               GlobalUser = user;
           }
       }
   });
}

$(document).ready(function ()
{
    $("#login").click(LoginPage.Login); // When user clicks on Log in button
    $("#createaccount").click(LoginPage.CreateAccount); // When user clicks on Create Account button
    $("#updatepass").click(AccountInfoPage.UpdateInfo(GlobalUser, "Password", $("#tablepass").val())); // Update password
    $("#updateemail").click(AccountInfoPage.UpdateInfo(GlobalUser, "EMailAdd", $("#tableemail").val())); // Update email
    $("#addelement").click(AccountInfoPage.UpdateInfo(GlobalUser, $("#ename").val(), $("#evalue").val())); // Add new element
});