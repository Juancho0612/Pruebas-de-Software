from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.firefox import GeckoDriverManager
import time


driver=webdriver.Firefox(executable_path=r'C:\Python310\geckodriver.exe')

driver.get('https://www.amazon.com/')

login=driver.find_element(By.ID, "nav-link-accountList")
login.click()

loginE=driver.find_element(By.ID, "ap_email")
loginE.click()

loginE.send_keys("3008289325")
loginE.send_keys(Keys.RETURN)
time.sleep(2)

loginP=driver.find_element(By.ID, "ap_password")
loginP.click()

loginP.send_keys("JuanDavid0612")
loginP.send_keys(Keys.RETURN)
time.sleep(3)

driver.find_element(By.LINK_TEXT, "Ofertas del Día").click()
time.sleep(1.5)

driver.find_element(By.LINK_TEXT, "Listas").click()
time.sleep(1.5)

driver.find_element(By.LINK_TEXT, "Vender").click()
time.sleep(1.5)

driver.find_element(By.LINK_TEXT, "Tarjetas de Regalo").click()
time.sleep(1.5)

driver.find_element(By.LINK_TEXT, "Comprar de Nuevo").click()
time.sleep(1.5)

driver.find_element(By.ID, "nav-your-amazon").click()
time.sleep(1.5)

driver.find_element(By.LINK_TEXT, "Servicio al Cliente").click()
time.sleep(1.5)

driver.find_element(By.ID, "nav-recently-viewed").click()
time.sleep(1.5)

menu = driver.find_element(By.ID, "nav-hamburger-menu")
menu.click()
time.sleep(1.5)
driver.execute_script("arguments[0].scrollIntoView(true);", menu);
time.sleep(4)
driver.find_element(By.LINK_TEXT, "Salir").click()
time.sleep(2)



driver.close()

