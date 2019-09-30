var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;  // Declare variables
elForm          = document.getElementById('formSignup');             // Store elements
elSelectPackage = document.getElementById('package')
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');


function packageHint (){                 // Declare function
    var pack  = this.options[this.selectedIndex].value;  // Get selected option
    if (pack === 'monthly') {                           // If monthly package
      elPackageHint.innerHTML  = 'Save $10 if you pay for 1 year!';//Show this msg
    }

}