describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(window.customerName).to.equal('bob');
    });
  });


//function FixtheScope(){
//let customerName = "bob"
//customerName
//}



  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });

//function FixtheScope(){
//let customerName = "bob"
//customerName
//function upperCaseCustomerName(){
//customerName.toUpperCase()
//}
// upperCaseCustomerName();
// let bestCustomer = "barnes"

//}




  describe('setBestCustomer()', function() {
    it('setBestCustomer', function() {
      expect(window.bestCustomer).to.equal(undefined);

      setBestCustomer();

      expect(window.bestCustomer).to.equal('not bob');
    });
  });



//function FixtheScope(){
//let customerName = "bob"

//customerName

//function upperCaseCustomerName(){
//customerName.toUpperCase()
//}

// upperCaseCustomerName();

//function setBestCustomer(){
//BestCustomer = 'not bob'
//}

//setBestCustomer()
//}










  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');

      expect(window.bestCustomer).to.equal('maybe bob');
    });
  });


//function FixtheScope(){
//let customerName = "bob"

//customerName

//function upperCaseCustomerName(){
//customerName.toUpperCase()
//}

// upperCaseCustomerName();

//function setBestCustomer(){
//BestCustomer = 'not bob'
//}

//setBestCustomer()

//function overwriteBestCustomer () {
//bestCustomer = 'maybe bob'
//}

//overwriteBestCustomer ()

//function changeLeastFavoriteCustomer () {
//leastFavoriteCustomer = 'billy'
//} 

//}
















  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});
