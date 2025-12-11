$bytes = Get-Content "cv.doc" -Encoding Byte -ReadCount 0
$text = [System.Text.Encoding]::ASCII.GetString($bytes)
$matches = [regex]::Matches($text, "[a-zA-Z0-9 \.,-]{15,}")
foreach ($match in $matches) {
    Write-Output $match.Value
}
