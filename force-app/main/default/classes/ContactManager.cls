public with sharing class ContactManager {
  
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContact(){
    try {
        return [Select id,LastName, Phone from Contact LIMIT 10];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
   
    
   @AuraEnabled(cacheable=true)
   public static List<Contact> getContactUsingParams(Integer numberOfRecords){
    try {
        return [Select id,LastName, Phone from Contact LIMIT:numberOfRecords];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}