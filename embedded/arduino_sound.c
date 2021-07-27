int analogPin = A0; // Sensor ouput
int digitalPin = 2;
int aValue = 0;
int dValue = 0;

void setup () 
{
    pinMode (digitalPin, INPUT);
    Serial.begin (9600);
}

void loop () 
{
    aValue = analogRead (analogPin);
    dValue = digitalRead (digitalPin);
    Serial.print ("analog Value : ");
    Serial.print (aValue);
    Serial.print (", digital Value : ");
    Serial.println (dValue);
    delay(200);
}