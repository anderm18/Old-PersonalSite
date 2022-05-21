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
			i <= str.find(end, str.find(start)+ start.length()); i++) {
		temp += str[i];
	}

	return temp;
}


vector<std::string> toArray(string arrayString) {

	vector<std::string> stringVec; 

	for(int i = 1; i < arrayString.length(); i+=6){
	
		stringVec.push_back(arrayString.substr(i, 4));
		
	}

	return stringVec;
}

void editProject(JSON &json){

	string response;
	std::vector<std::string> tempStore;
	cout << "Which project would you like to edit: " << endl;
	string tempString;

	for(int i = 0; i < json.size(); i++) {

		tempString = json[i][0].substr(1, 4);
		tempStore.push_back(tempString);

		cout << tempString << endl;
	}






}

JSON parseProject(std::string filename) {

	std::ifstream jsonFile(filename);
	JSON data;
	string line;
	string jsondata;

	while(jsonFile >> line){ jsondata += line + ' '; }


	int displace = 0;
	while(displace != jsondata.length()){

		line = substring(jsondata, "{", "}");
		cout << line << endl;
		cout << jsondata.size() << endl;
		cout << displace << endl;

		std::vector<std::string> temp;
		std::vector<std::string> tempInner;
		temp.push_back(substring(line, "\"name\" : ", "\","));
		temp.push_back(substring(line, "\"desc\" : ", "\","));
		temp.push_back(substring(line, "\"lk\" : ", "\","));
		string tempStr = substring(line, "\"icon\" : ", "]");
		temp.push_back(tempStr);

		data.push_back(temp);
	}

	return data;

}

int main() {
	
	std::string action;
	std::string type;

	cout << "What Would you like to do (Edit/Add/Delete)" << endl;
	cin >> action;
	convertLower(action);
	cout << "Ok, is this for a Project or a Course?" << endl;
	cin >> type;
	convertLower(type);

	JSON json;
	if(action == "edit" || action == "e"){
		if(type == "project" || type == "p"){
			json = parseProject("projects.json");
			editProject(json);


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