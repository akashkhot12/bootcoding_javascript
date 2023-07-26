let day
switch (new Date().getDay()) {
    case 1:
       day = "Monday"
        break;

        case 2:
            day = "tuesday"
             break;

             case 3:
                day = "Wednesday"
                 break;

                 case 4:
                    day = "thursday"
                     break;

                     case 5:
                        day = "Friday"
                         break;

                         case 6:
                            day = "Saturday"
                             break;

                             case 7:
                                day = "Sunday"
                                 break;


    default:
        break;
}

console.log(day);