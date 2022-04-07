import java.util.Scanner;
import java.util.Date;
import java.util.Random;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

/*
 * Kevin Ullbrandt
 * kevull-0
 * Biblotek system där man kan lägga till böcker, låna böcker och även återlämna böcker även skriva ut allt.
 * 
 * 1. skapa meny
    2. lägga till bok. bokens titel , antal exemplar , bok-id (genererad 1000 - 100000)
    3. Utskift Bokens namn. Titel , antal , utlånade (i bokstavs ordning)
    3. Utskift ID. Bok-id , titel , utlånade (sortera i stigade form minst till störst
    4. Låna bok. Ange bok-id och namn på studenten som lånar (kontrollera så att det finns böker att låna ut)
    5. Utskrift av utlånade böcker. Bok-id , titel , Låntagare , datum
    6. Återlämna bok. ange bok-id och antal lånade dagar
    
    Jag tar antagandet att 2d arrayer är tillåtna. Hittar inget om det i beskivningen. Men är lite osäker men skriver det här för säkerhetsskull.
 */
public class Omtentamen_VT21_kevull0 {

    
    private static Scanner userInput = new Scanner(System.in);
    
    public static void main(String[] args)
    {
        /*  Beskrivning av 2d array:
         *  1. bok-id
         * 2. bokens titel 
         * 3. antal exemplar
         * 4. antal utlånade
         * 5. är dem utlånade (y/n)
         * 6. Lånetagare
         * 7. datum
         * */
        String[][] arkiv = new String [1000][8];
        
        while(true)//Dem olika valen i menyn
        {
            String menyInput = menu();
            
            if (menyInput.equals("1"))
            {
                addBook(arkiv);
            }
            else if (menyInput.equals("2"))
            {
                printArkivTitle(arkiv);
            }
            else if (menyInput.equals("3"))
            {
                printAkrivId(arkiv);
            }
            else if (menyInput.equals("4"))
            {
                borrowBook(arkiv);
            }
            else if (menyInput.equals("5"))
            {
                printBorrowedBooks(arkiv);
            }
            else if (menyInput.equals("6"))
            {
                returnBook(arkiv);
            }
            else if (menyInput.equals("q"))
            {
                System.exit(0); 
            }
            else
            {
                System.out.print("ERROR! Den inmatning du gjorde stämmer inte. Var vänligen att försöka igen\n\n");
            }
        }
    }
    
    /*
     * Skapar en meny så användaren kan välja mellan valen
     * @param kalla på input
     * @retur skickar ut en text till användare med alla valen
     */
    public static String menu()
    {
        //meny skrivs ut
        System.out.print("1. Lägg till bok\n"
                + "2. Lista bäcker i bokstavsordning\n"
                + "3. Lista böcker i stigande bok-id ordning\n"
                + "4. Låna bok\n"
                + "5. Lista utlånade böcker\n"
                + "6. Återlämna bok\n"
                + "q. Avsluta programmet\n");
        
        return input();
    }
    
    /*
     * Används för att eneklt kunna få input ifrån användaren
     * @param Användare skriver in värde
     * @retur sprar värde i valfri array, string eller int av val
     */
    public static String input()
    {
        String input;
        
        input = userInput.nextLine();
        return input;
    }
    
    /*
     * Ger all data för att lägga till böcker
     * @param behöver få in arkiv, även värden ifrån avändaren
     * @retur sparar allt som man behöver veta om boken i arkiv
     */
    public static void addBook(String[][]arkiv)
    {
        String bookname; 
        String bookcount;
        String bookidString; //Avnänds för att converta book int till en stirng för att lagra i arkivet
        int bookidInt = 0;
        int randomMAx = 100000; //maximala möjliga tal i slumpmässiga bersäkningen
        int randomMin = 1000; //minsta möjliga tal i slumpmässiga bersäkningen
        int testIfInt = 0;
        
        System.out.print("Lägg till bok\n"
                + "Skriv bokens namn\n");
        
        bookname = input();
        
        
        System.out.print("Skriv antal böcker\n");
        
        bookcount = input();
        
        
        //kollar så att inmatningen är en int
        try {
            testIfInt = Integer.parseInt(bookcount);
        }
            catch (NumberFormatException e)
        {
            System.out.print("ERORR! Du kan bara ange siffror. Var vänligen att förska igen\n\n");
            return;
        }
        
        Random id = new Random();
        
        bookidInt = id.nextInt(randomMAx - randomMin);
        bookidString = String.valueOf(bookidInt);
        
        for (int i = 0; i < arkiv.length; i++)
        {
            if (!bookidString.equals(arkiv[i][1])) //Kontrollerar så att det inte finns samma id
            {
                
                if (arkiv[i][1] == null)
                {
                    arkiv[i][1] = bookidString;
                    arkiv[i][2] = bookname;
                    arkiv[i][3] = bookcount;
                    arkiv[i][4] = "0";
                    arkiv[i][5] = "N";
                    
                    break;
                }
            }
            else
            {
                System.out.print("ERROR! Samma id fanns redan. Var vänligen att försöka igen\n");
                return;
            }
        }
    }
    
    /*
     * Skriver ut värderna title , antal och lånade
     * @param behöver få in arkiv
     * @retur kommer tillbaka till meny. Får inga nya värden
     */
    public static void printArkivTitle(String[][]arkiv)
    {
        System.out.print("Titel" + "\t" + "Antal" + "\t" + "Lånade" + "\n");
        
        //kör igenom alla listan
        for (int i = 0; i < arkiv.length; i++)
        {
            if (arkiv[i][2] != null) 
            {
                System.out.print(arkiv[i][2] + "\t" + arkiv[i][3] + "\t" + arkiv[i][4] + "\n");
                
            }
        }
    }
    
    /*
     * Skriver ut värderna bokid , antal och lånade
     * @param behöver få in arkiv
     * @retur kommer tillbaka till meny. Får inga nya värden
     */
    public static void printAkrivId(String[][]arkiv)
    {
      //Used to save string to change place
        int saveIntI = 0;
        int saveIntJ = 0;
        String saveString;
        
        System.out.print("bokId" + "\t" + "Antal" + "\t" + "Lånade" + "\n");
        
        //kör igenom alla listan
        for (int i = 0; i < arkiv.length; i++)
        {
              
            //kör igen hela listan igen
            for (int j = i+1; j < arkiv.length; j++)
            {
                
                if (arkiv[j][1] != null)
                {
                    saveIntI = Integer.parseInt(arkiv[i][1]);
                    saveIntJ = Integer.parseInt(arkiv[j][1]);
                
                
                    //Sorterar alla arrayer så det blir lägst till högst
                    if (saveIntI > saveIntJ)
                    {
                        saveString = arkiv[i][1];
                        arkiv[i][1] = arkiv[j][1];
                        arkiv[j][1] = saveString;
                                
                        saveString = arkiv[i][2];
                        arkiv[i][2] = arkiv[j][2];
                        arkiv[j][2] = saveString;
                                
                        saveString = arkiv[i][3];
                        arkiv[i][3] = arkiv[j][3];
                        arkiv[j][3] = saveString;
                        
                        saveString = arkiv[i][4];
                        arkiv[i][4] = arkiv[j][4];
                        arkiv[j][4] = saveString;
                                
                        saveString = arkiv[i][5];
                        arkiv[i][5] = arkiv[j][5];
                        arkiv[j][5] = saveString;
                    }
                }
            }
            
            if (arkiv[i][2] != null) 
            {
                System.out.print(arkiv[i][1] + "\t" + arkiv[i][2] + "\t" + arkiv[i][5] + "\n");
            }
        }
    }
    
    /*
     * Sparar värden för när användaren vill spara bok
     * @param behöver få in arkiv och värden ifrån användare
     * @retur ny data sparad i arkiv 
     */
    public static void borrowBook(String[][]arkiv)
    {
        String inputName;
        String inputId;
        
        System.out.print("Här kan du låna bok (Skriv q om du ångrar dig)\n"
                + "Skriv ditt namn för att låna bok.\n");
        inputName = input();
        
        if (inputName.equals("q"))//Stänger ner om användaren matar in q
        {
            return;
        }
        
        System.out.print("Skriv bokid på boken du vill låna\n");
        inputId = input();
        
        if (inputId.equals("q"))//Stänger ner om användaren matar in q
        {
            return;
        }
        
        //Hittar datum 
        DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDateTime timeNow = LocalDateTime.now();
        
        for (int i = 0; i < arkiv.length; i++)
        {
            if (arkiv[i][1] != null) //Kollar så att man inte plockar upp tomma platser i arrayen
            {
                if (arkiv[i][1].equals(inputId)) //kollar om id finns lagrad
                {
                    if (!arkiv[i][5].equals("Y")) //kollar om boken redan är lånad
                    {
                        arkiv[i][5] = "Y";
                        arkiv[i][6] = inputName;
                        arkiv[i][7] = timeNow.format(dateFormat);
                        
                        return;
                    }
                    else
                    {
                        System.out.print("ERORR! Denna bok är redan utlånad. Var vänligen att testa igen\n\n");
                        return;
                    }
                }
            }
        }
        System.out.print("ERORR! Den bokid du angav finns inte. Var vänligen att försöka igen\n\n");
        return;
    }
    
    /*
     * Skriver ut all data för lånade böker bokid , titel , lånetagare och datum
     * @param behöver få in arkiv
     * @retur skickar ut text och information som finns i arkiv
     */
    public static void printBorrowedBooks(String[][]arkiv)
    {
        System.out.print("bokId" + "\t" + "Titel" + "\t" + "Låntagare" + "\t" + "Datum" + "\n");
        
        for (int i = 0; i < arkiv.length; i++)
        {
           
            if (arkiv[i][7] != null) 
            {
                System.out.print(arkiv[i][1] + "\t" + arkiv[i][2] + "\t" + arkiv[i][6] + "\t\t" + arkiv[i][7] + "\n");
            }
        }
    }
    
    /*
    * Sparar värden för retur
    * @param behöver arkiv och input av användaren
    * @retur får in nya värden i arkiv
    */
    public static void returnBook(String[][]arkiv)
    {
        String inputId;
        long timeDiffrance = 0;
        
        System.out.print("Här kan du lämna tillbaka din bok \nAnge den bokid för den book du vill lämna tillbaka.\n");
        inputId = input();
        
        
        for (int i = 0; i < arkiv.length; i++)
        {
            if (arkiv[i][1] != null)
            {
                if (arkiv[i][1].equals(inputId))
                {
                    arkiv[i][6] = null;
                    arkiv[i][7] = null;
                    arkiv[i][5] = "N";
                    System.out.print("\nBokid: "+ inputId + "\nLånetid: " + timeDiffrance + " dagar\n\n");
                    return;
                }
            }
        }
        System.out.print("ERROR! Det id du matade in finns inte. Var vänligen att försöka igen\n\n"); //Skickar ut error om den inte hittar id
        return;
    }
}
