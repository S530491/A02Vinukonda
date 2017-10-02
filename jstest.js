Qunit.tes('testing',function(assert){
assert.equal(myfun2("A","A","A"),"4",'Tested with three relatively Grades');
assert.equal(myfun2("A","A","F"),"Student Failed",'Tested with three Grades in which one is F grade');
//assert.equal(myfun2("F","F","F"),"Student Failed",'Tested with three Grades in which all are F grades');
});