import SwiftUI

struct ContentView: View {
    @State private var task: String = ""
    @State private var bulletPoints: [String] = []
    @State private var timeRemaining: Int = 1500 // 25 minutes in seconds
    @State private var timerActive: Bool = false

    var body: some View {
        VStack(spacing: 20) {
            Text("Top Task")
                .font(.largeTitle)
                .bold()

            TextField("Enter your most important task", text: $task)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.horizontal)

            Button(action: startTask) {
                Text(timerActive ? "Restart" : "Start")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }

            Text("Time Remaining: \(timeString)")
                .font(.title2)
                .foregroundStyle(timerActive && timeRemaining < 60 ? Color.red : Color.primary)

            if !bulletPoints.isEmpty {
                VStack(alignment: .leading) {
                    Text("Quick Steps:")
                        .font(.headline)
                    ForEach(bulletPoints, id: \.self) { point in
                        Text("• \(point)")
                    }
                }
                .padding()
            }
        }
        .padding()
        .frame(minWidth: 400, minHeight: 300)
        .onAppear { startTimer() }
    }

    var timeString: String {
        let minutes = timeRemaining / 60
        let seconds = timeRemaining % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }

    func startTask() {
        timerActive = true
        timeRemaining = 1500
        bulletPoints = []
        fetchBulletPoints()
    }

    func startTimer() {
        Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { _ in
            guard timerActive else { return }
            if timeRemaining > 0 {
                timeRemaining -= 1
            } else {
                timerActive = false
            }
        }
    }

    func fetchBulletPoints() {
        guard !task.isEmpty else { return }
        Task {
            let points = await OpenAIHelper.shared.bulletPoints(for: task)
            DispatchQueue.main.async {
                self.bulletPoints = points
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

