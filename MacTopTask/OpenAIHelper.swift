import Foundation

struct OpenAIHelper {
    static let shared = OpenAIHelper()
    private init() {}

    private let apiKey = "YOUR_OPENAI_API_KEY" // Replace with your actual key

    func bulletPoints(for task: String) async -> [String] {
        guard let url = URL(string: "https://api.openai.com/v1/chat/completions") else {
            return []
        }

        let prompt = "Provide a short list of bullet points explaining how to quickly complete the task: \(task)"

        let payload: [String: Any] = [
            "model": "gpt-3.5-turbo",
            "messages": [[
                "role": "user",
                "content": prompt
            ]],
            "max_tokens": 60
        ]

        guard let httpBody = try? JSONSerialization.data(withJSONObject: payload) else {
            return []
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("Bearer \(apiKey)", forHTTPHeaderField: "Authorization")
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = httpBody

        do {
            let (data, _) = try await URLSession.shared.data(for: request)
            if let response = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
               let choices = response["choices"] as? [[String: Any]],
               let first = choices.first,
               let message = first["message"] as? [String: Any],
               let content = message["content"] as? String {
                let points = content.split(separator: "\n").map { $0.trimmingCharacters(in: .whitespacesAndNewlines) }
                return points.filter { !$0.isEmpty }
            }
        } catch {
            print("OpenAI error: \(error)")
        }

        return []
    }
}
