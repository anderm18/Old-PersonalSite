#include <iostream>
#include <string>
#include <vector>
#include <fstream>

using namespace std;
typedef std::vector<std::vector<std::string>> JSON;

std::string convertLower(string &userInput){
	
	for(int i = 0; i < userInput.length(); i++){
		userInput[i] = std::tolower(userInput[i]);
	}

	return userInput;
}

std::string substring(string str, string start, string end) {

	std::string temp;
	for(int i = str.find(start) + start.length(); 
			i <= str.find(end, str.find(start)+ start.length()); i++){
		temp += str[i];
	}
	return temp;
}

JSON parseProject(std::string filename) {

	std::ifstream jsonFile(filename);
	JSON data;
	string line;
	string jsondata;
	while(jsonFile >> line){ jsondata += line + ' '; }

	line = jsondata.substr(jsondata.find('{'), jsondata.find('}')-1);
	cout << line;
	std::vector<std::string> temp;
	temp.push_back(substring(line, "\"name\" : ", "\","));
	data.push_back(temp);
	temp.clear();
	temp.push_back(substring(line, "\"desc\" : ", "\","));
	data.push_back(temp);
	temp.clear();
	temp.push_back(substring(line, "\"lk\" : ", "\","));
	data.push_back(temp);
	string tempStr = substring(line, "\"icon\" : ", "]");

	//write some for loop to convert string to vector, or function idc just go to bed idiot

	return data;
}





int main() {
	
	std::string action;
	std::string type;

	cout << "What Would you like to do (Edit/Add/Delte)" << endl;
	cin >> action;
	convertLower(action);
	cout << "Ok, is this for a Project or a Course?" << endl;
	cin >> type;
	convertLower(type);

	JSON json;
	if(action == "edit" || action == "e"){
		if(type == "project" || type == "p"){
			json = parseProject("projects.json");
		} else if (type == "course" || type == "c"){

		} else{
			std::cerr << "ERROR: Unknown Type '" + type + "' (options edit or e, add or a, delete or d)\n";
			exit(1);  
		}
	} else if(action == "add" || action == "a") {
		if(type == "project" || type == "p"){

		} else if (type == "course" || type == "c"){

		} else{
			std::cerr << "ERROR: Unknown Type '" + type + "' (options edit or e, add or a, delete or d)\n";
			exit(1);  
		}
	} else{
		std::cerr << "ERROR: Unknown Action '" + action + "' (options edit or e, add or a, delete or d)\n";
		exit(1);  
	}





	



}