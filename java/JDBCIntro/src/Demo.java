import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

public class Demo {

	public static void main(String[] args) throws Exception {
		Properties props = new Properties();
		try ( FileInputStream fis = new FileInputStream("conf.properties") ){
			props.load(fis);
		}
		
			// Teste le code
		/*System.out.println(props.getProperty("jdbc.driver.classe"));*/
		Class.forName( props.getProperty("jdbc.driver.classe"));
		
		String url = props.getProperty("jdbc.url");
		String login = props.getProperty("jdbc.login");
		String password = props.getProperty("jdbc.password");
		
		
		try (Connection connection = DriverManager.getConnection( url, login, password)) {
			/*String strsql = "INSERT INTO shippers(`ShipperID`, `CompanyName`, `Phone`)"
					+ "VALUES (1,'Speedy Express', 'United Package', 2)";
			try (Statement statement = connection.createStatement()) {
				statement.executeUpdate(strsql);
			}*/
			String strsql = "SELECT * FROM shippers";
			try (Statement statement = connection.createStatement()) {
				ResultSet resultSet = statement.executeQuery(strsql);
				
				while (resultSet.next()) {
					int ShipperID = resultSet.getInt(1);
					
				}
			}
		}
	}
}
